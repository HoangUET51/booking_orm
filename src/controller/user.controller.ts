import { BaseController } from "@/base";
import User from "@/entities/User";
import UserRepository from "@/repository/user.repository";
import {Response, Request,NextFunction} from 'express'
import { getCustomRepository } from "typeorm";

class _UserController extends BaseController {
    async createOrEdit(req:Request,res:Response,next:NextFunction) {
        try {
            const {name,email,phone,type,id} = req.body;
            const userRepository = getCustomRepository(UserRepository);
            let user:User | null = new User()
            user.name = name;
            user.email = email;
            user.phone = phone;
            user.type = type;
            
            const result = await userRepository.createOrEditUser(user)
            return this.success(req,res)(result);
        }catch(e){
            next(this.getManagedError(e));
        }
    }

    async getAllUser(req:Request,res:Response,next:NextFunction) {
        try {
            const userRepository = getCustomRepository(UserRepository);

            const result = await userRepository.getAll();
            return this.success(req,res)(result);
        } catch(e) {
            next(this.getManagedError(e));
        }
    }
}

const UserController = new _UserController("USER_CONTROLLER");
export default UserController;

