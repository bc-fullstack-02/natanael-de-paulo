declare namespace Express{
  export interface Request{
    user_id: string;
    publish: Promise;
    file: Promise;
  }
}