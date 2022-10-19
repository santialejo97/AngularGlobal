export class UserModel {
  constructor(
    private readonly uuid: string,
    private readonly email: string,
    private readonly name: string
  ) {}
}
