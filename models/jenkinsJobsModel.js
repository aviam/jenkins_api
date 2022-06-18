//mongodb
const mongoose = require("mongoose");
const generator = require('mongoose-gen');

const Schema = mongoose.Schema;

const jenkinsJobsSchema = new Schema({
    _class: {
        type: 'String'
    },
    name: {
        type: 'String'
    },
    url: {
        type: 'String'
    },
    color: {
        type: 'String'
    },
    actions: {
        type: [
            'Mixed'
        ]
    },
    description: {
        type: 'String'
    },
    displayName: {
        type: 'String'
    },
    displayNameOrNull: {
        type: 'Mixed'
    },
    fullDisplayName: {
        type: 'String'
    },
    fullName: {
        type: 'String'
    },
    buildable: {
        type: 'Boolean'
    },
    builds: {
        type: [
            'Mixed'
        ]
    },
    firstBuild: {
        _class: {
            type: 'String'
        },
        number: {
            type: 'Number'
        },
        url: {
            type: 'String'
        },
        actions: {
            type: 'Mixed'
        },
        building: {
            type: 'Mixed'
        },
        description: {
            type: 'Mixed'
        },
        displayName: {
            type: 'Mixed'
        },
        duration: {
            type: 'Mixed'
        },
        estimatedDuration: {
            type: 'Mixed'
        },
        executor: {
            type: 'Mixed'
        },
        fullDisplayName: {
            type: 'Mixed'
        },
        id: {
            type: 'Mixed'
        },
        keepLog: {
            type: 'Mixed'
        },
        queueId: {
            type: 'Mixed'
        },
        result: {
            type: 'Mixed'
        },
        timestamp: {
            type: 'Mixed'
        },
        builtOn: {
            type: 'Mixed'
        },
        changeSet: {
            type: 'Mixed'
        }
    },
    healthReport: {
        type: [
            'Mixed'
        ]
    },
    inQueue: {
        type: 'Boolean'
    },
    keepDependencies: {
        type: 'Boolean'
    },
    lastBuild: {
        _class: {
            type: 'String'
        },
        number: {
            type: 'Number'
        },
        url: {
            type: 'String'
        },
        actions: {
            type: 'Mixed'
        },
        building: {
            type: 'Mixed'
        },
        description: {
            type: 'Mixed'
        },
        displayName: {
            type: 'Mixed'
        },
        duration: {
            type: 'Mixed'
        },
        estimatedDuration: {
            type: 'Mixed'
        },
        executor: {
            type: 'Mixed'
        },
        fullDisplayName: {
            type: 'Mixed'
        },
        id: {
            type: 'Mixed'
        },
        keepLog: {
            type: 'Mixed'
        },
        queueId: {
            type: 'Mixed'
        },
        result: {
            type: 'Mixed'
        },
        timestamp: {
            type: 'Mixed'
        },
        builtOn: {
            type: 'Mixed'
        },
        changeSet: {
            type: 'Mixed'
        }
    },
    lastCompletedBuild: {
        _class: {
            type: 'String'
        },
        number: {
            type: 'Number'
        },
        url: {
            type: 'String'
        },
        actions: {
            type: 'Mixed'
        },
        building: {
            type: 'Mixed'
        },
        description: {
            type: 'Mixed'
        },
        displayName: {
            type: 'Mixed'
        },
        duration: {
            type: 'Mixed'
        },
        estimatedDuration: {
            type: 'Mixed'
        },
        executor: {
            type: 'Mixed'
        },
        fullDisplayName: {
            type: 'Mixed'
        },
        id: {
            type: 'Mixed'
        },
        keepLog: {
            type: 'Mixed'
        },
        queueId: {
            type: 'Mixed'
        },
        result: {
            type: 'Mixed'
        },
        timestamp: {
            type: 'Mixed'
        },
        builtOn: {
            type: 'Mixed'
        },
        changeSet: {
            type: 'Mixed'
        }
    },
    lastFailedBuild: {
        type: 'Mixed'
    },
    lastStableBuild: {
        _class: {
            type: 'String'
        },
        number: {
            type: 'Number'
        },
        url: {
            type: 'String'
        },
        actions: {
            type: 'Mixed'
        },
        building: {
            type: 'Mixed'
        },
        description: {
            type: 'Mixed'
        },
        displayName: {
            type: 'Mixed'
        },
        duration: {
            type: 'Mixed'
        },
        estimatedDuration: {
            type: 'Mixed'
        },
        executor: {
            type: 'Mixed'
        },
        fullDisplayName: {
            type: 'Mixed'
        },
        id: {
            type: 'Mixed'
        },
        keepLog: {
            type: 'Mixed'
        },
        queueId: {
            type: 'Mixed'
        },
        result: {
            type: 'Mixed'
        },
        timestamp: {
            type: 'Mixed'
        },
        builtOn: {
            type: 'Mixed'
        },
        changeSet: {
            type: 'Mixed'
        }
    },
    lastSuccessfulBuild: {
        _class: {
            type: 'String'
        },
        number: {
            type: 'Number'
        },
        url: {
            type: 'String'
        },
        actions: {
            type: 'Mixed'
        },
        building: {
            type: 'Mixed'
        },
        description: {
            type: 'Mixed'
        },
        displayName: {
            type: 'Mixed'
        },
        duration: {
            type: 'Mixed'
        },
        estimatedDuration: {
            type: 'Mixed'
        },
        executor: {
            type: 'Mixed'
        },
        fullDisplayName: {
            type: 'Mixed'
        },
        id: {
            type: 'Mixed'
        },
        keepLog: {
            type: 'Mixed'
        },
        queueId: {
            type: 'Mixed'
        },
        result: {
            type: 'Mixed'
        },
        timestamp: {
            type: 'Mixed'
        },
        builtOn: {
            type: 'Mixed'
        },
        changeSet: {
            type: 'Mixed'
        }
    },
    lastUnstableBuild: {
        type: 'Mixed'
    },
    lastUnsuccessfulBuild: {
        type: 'Mixed'
    },
    nextBuildNumber: {
        type: 'Number'
    },
    queueItem: {
        type: 'Mixed'
    },
    concurrentBuild: {
        type: 'Boolean'
    },
    scm: {
        type: 'Mixed'
    }
});
const jenkinsJobsSchemaNew = new Schema({}, { strict: false });
module.exports = mongoose.model('jenkinsJobs', jenkinsJobsSchemaNew);