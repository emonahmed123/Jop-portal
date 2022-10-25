const Jobs = require("../models/jobs")
// const User = require("../models/User")



exports.getJobsService = async (filter, queries) => {
    const jobs = await Jobs.find(filter)
        .skip(queries.skip)
        .limit(queries.limit)
        .sort(queries.sortBy)
        .select(queries.fields)
    return jobs;
}

exports.getSpecificJobService = async (id) => {
    const job = await Jobs.findOne({ _id: id });
    return job;
}



exports.saveAJobService = async (data) => {
    const job = await Jobs.create(data);
    return job;
}


exports.updateJobService = async (id, data) => {
    const Job = await Jobs.updateOne({ _id: id }, data, {
        runValidators: true
    });
    return Job;
}