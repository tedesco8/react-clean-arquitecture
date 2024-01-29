import ExampleFactory from "../../domain/factory/example.factory";

import type { IExampleRepository } from "../../domain/interfaces/repositories/exampleRepository.interface";
import type { Example } from "../../domain/types/example.type";
import type { Callbacks } from "../../domain/types/common.type";
import { IAuthRepository } from "../../domain/interfaces/repositories/authRepository.interface";

export default class AuthService {
  private _authRepository: IAuthRepository;
  constructor(authRepository: IAuthRepository) {
    this._authRepository = authRepository;
  }

  public ping(callbacks: Callbacks) {
    const { onSuccess, onError } = callbacks;

    try {
      this._authRepository
        .ping()
        .then((res: any) => {
          onSuccess(res);
        })
        .catch((err: any) => {
          onError(err);
        });
    } catch (error: any) {
      onError(error);
    }
  }
}
