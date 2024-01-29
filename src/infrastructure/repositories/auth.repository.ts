import { http } from "../http/http";

import { IAuthRepository } from "../../domain/interfaces/repositories/authRepository.interface";

export default class AuthRepository implements IAuthRepository {
    async ping() {
        try {
            const res = await http.get<any>(
                `http://localhost:5000/v1/api/auth/ping`,
                false //No public endpoint
            );
            if (res.status === 401) {
                throw new Error("Invalid")
            }
            return res;
        } catch (err: any) {
            throw new Error(err);
        }
    }

}
