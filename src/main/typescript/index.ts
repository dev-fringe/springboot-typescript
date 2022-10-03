import "reflect-metadata";
import { Controller } from "./Controller";
import { container } from "tsyringe";
import { MongoRepository } from "./Repository";

container.registerInstance("Repository", new MongoRepository());
const controller = container.resolve(Controller);
console.log('test');
document.getElementById("app").innerHTML = `
  ${controller.hello()}
`;
