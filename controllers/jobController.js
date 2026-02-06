import Job from "../models/job.js";

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user.id });
    if (!jobs) {
      return res.send("no jobs found");
    }
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: "faild to load", err: err.message });
  }
};

export const getJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findOne({
      _id: id,
      user: req.user.id,
    });
    if (!job) {
      return res.send("no job found");
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: "faild to load", err: err.message });
  }
};

export const createJobs = async (req, res) => {
  try {
    const job = req.body;
    const newJob = await Job.create({
      ...job,
      user: req.user.id,
    });

    res.status(201).json({ message: "a new job has been added", job: newJob });
  } catch (err) {
    res
      .status(500)
      .json({ message: "faild to create a job", err: err.message });
  }
};

export const editJob = async (req, res) => {
  try {
    const { id } = req.params;
    const currentJob = req.body;
    const updatedJob = await Job.findOneAndUpdate(
      {
        user: req.user.id,
      },
      currentJob,
      { new: true },
    );
    if (!currentJob) {
      return res.send("please try again");
    }

    res.status(200).json({ updatedJob });
  } catch (err) {
    res
      .status(500)
      .json({ message: "something wrong on our end", err: err.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });
    if (!job) {
      return res.status(404).json({ message: "try again" });
    }
    res.status(200).json({ message: "the record has been deleted", job });
  } catch (err) {
    res.status(500).json({
      message: "something went wrong on the server",
      err: err.message,
    });
  }
};
