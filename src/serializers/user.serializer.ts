import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUpdateUserRequest,
  IUpdateUserResponseClient,
  IUserRequest,
  IuserRequestList,
  IUserRequestReturnedClient,
  IUserUpdateRequest,
} from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});
const userWithoutPasswordFieldSerializer: SchemaOf<IUserRequestReturnedClient> =
  yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    id: yup.string().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });
const IUpdateUserRequestSerializer: SchemaOf<IUpdateUserRequest> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    password: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });

const IUpdateUserRequestWithoutPasswordSerializer: SchemaOf<IUpdateUserResponseClient> =
  yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });

const IUserUpdateRequestSerializer: SchemaOf<IUserUpdateRequest> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    id: yup.string().notRequired(),
    password: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
  });

const userWithoutPasswordFieldListSerializer: SchemaOf<IuserRequestList> = yup
  .object()
  .shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    id: yup.string().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });

const userVetorSerializer: SchemaOf<IuserRequestList[]> = yup.array(
  userWithoutPasswordFieldSerializer
);
export {
  userSerializer,
  userWithoutPasswordFieldSerializer,
  IUpdateUserRequestSerializer,
  IUpdateUserRequestWithoutPasswordSerializer,
  IUserUpdateRequestSerializer,
  userVetorSerializer,
};
