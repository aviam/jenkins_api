const constants = require("../config/constants");
const JenkindModel = require("../models/jenkinsJobsModel");
const mongoose = require("mongoose");
const jenkinsModel = new JenkindModel();
mongoose.Promise = global.Promise;
mongoose.connect(constants.mongoconnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var jenkins = require("jenkins")({
  baseUrl: constants.basePath,
  crumbIssuer: true,
  promisify: true
});
const getJobs = async () => {
  try {
    console.log("Start fetch jenkins job");
    const jobs = await jenkins.job.list();
    const validJobs = jobs.filter(
      x =>
        x._class == "org.jenkinsci.plugins.workflow.job.WorkflowJob" &&
        x.color == "red"
    );
    const response = await lastFailedBuilds(validJobs);
    convertToMongoObject(response);
  } catch (err) {
    console.log(err);
  }
};

const convertToMongoObject = response => {
  try {
    if (Array.isArray(response) && response.length > 0) {
      jenkinsModel.collection.deleteMany({});
      jenkinsModel.collection.insertMany(response);
      console.log("Jenkins builds saved to database");
    }
  } catch (error) {
    console.log("Can't save jenkins failed jobs to DB" + error);
  }
};

const lastFailedBuilds = async validJobs => {
  const arrayToInsert = [];
  for (let i = 0; i < validJobs.length; i++) {
    const job = validJobs[i];
    const jobs = await jenkins.job.get(job.name);
    const build = await jenkins.build.get(
      job.name,
      jobs.lastFailedBuild.number
    );
    arrayToInsert.push(build);
  }
  return arrayToInsert;
};

getJobs();
