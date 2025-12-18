import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express, { Request, Response } from "express";
import path from "path"; // <-added this
const server = express();
const port = 3040;

server.get("/components/weather", function (req: Request, res: Response): void {
  const filePath = path.join(process.cwd(), "public", "weather.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(filePath);
});
server.get("/hello", function (req: Request, res: Response): void {
  const response = routeHello();
  res.send(response);
});
server.get(
  "/api/names",
  async function (req: Request, res: Response): Promise<void> {
    let response: string;
    try {
      response = await routeAPINames();
    } catch (err) {
      console.log(err);
    }
    res.send(response);
  }
);

server.get("/api/weather/:zipcode"),
  function (req: Request, res: Response): void {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
  };

server.listen(port, function () {
  console.log("Listening on " + port);
});