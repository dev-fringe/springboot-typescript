import { inject, injectable } from "tsyringe";
import { Repository } from "./Repository";

@injectable()
export class Service {
  constructor(@inject("Repository") private repository: Repository) {}

  find() {
    return this.repository.find();
  }
}
