import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import "dotenv/config";

const loginSessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const repositoryUser = AppDataSource.getRepository(User);
  const user = await repositoryUser.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError(403, "user or password invalid");
  }

  const passwordCombined = await compare(password, user.password);

  if (!passwordCombined) {
    throw new AppError(403, "user or password invalid");
  }
  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY!,
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return token;
};

export default loginSessionService;
