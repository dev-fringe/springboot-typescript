import { inject, injectable } from "tsyringe";
import { Service } from "./UserService";

@injectable()
export class Controller {
  constructor(@inject(Service) private service: Service) {}

  hello() {
    return `Hello from ${this.service.find()}`;
  }
}
