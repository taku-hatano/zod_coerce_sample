import express from "express";
import { z } from "zod";

const app = express();

const sampleSchema = z.object({
  id: z.number(),
});
app.get("/sample", (req, res) => {
  const query = sampleSchema.parse(req.query);
  res.send(query);
});

const sampleSchemaWithPreprocess = z.object({
  id: z.preprocess((val) => Number(val), z.number()),
});
app.get("/sample_with_preprocess", (req, res) => {
  const query = sampleSchemaWithPreprocess.parse(req.query);
  res.send(query);
});

const sampleSchemaWithTransform = z.object({
  id: z.string().regex(/^\d+$/).transform(Number),
});
app.get("/sample_with_transform", (req, res) => {
  const query = sampleSchemaWithTransform.parse(req.query);
  res.send(query);
});

const sampleSchemaWithCoerce = z.object({
  id: z.coerce.number(),
});
app.get("/sample_with_coerce", (req, res) => {
  const query = sampleSchemaWithCoerce.parse(req.query);
  res.send(query);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
