import express from "express";
import Profile from "../models/Profile";
import { Error } from "mongoose";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    if (!profile) {
      return res.status(404).json({ msg: "Profile not found" });
    }
    res.json(profile);
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send("Server error");
  }
});

router.post("/:userId", async (req, res) => {
  const { name, age } = req.body;
  try {
    let profile = await Profile.findOne({ userId: req.params.userId });
    if (profile) {
      profile.name = name;
      profile.age = age;
      await profile.save();
    } else {
      profile = new Profile({ userId: req.params.userId, name, age });
      await profile.save();
    }
    res.json(profile);
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send("Server error");
  }
});

export default router;
