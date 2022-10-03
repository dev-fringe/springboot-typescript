import { injectable } from "tsyringe";

export interface Repository {
  find(): string;
}

@injectable()
export class MongoRepository implements Repository {
  find() {
    return "Mongo";
  }
}

@injectable()
export class PostgresRepository implements Repository {
  find() {
    return "Postgres";
  }
}
