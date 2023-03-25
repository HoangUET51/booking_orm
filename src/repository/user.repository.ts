import { BaseRepository } from "@/base";
import User from "@/entities/User";
import { IUser } from "@/models/user.model";
import { EntityRepository } from "typeorm";

@EntityRepository(User)
class UserRepository extends BaseRepository<User> {
    async getAll():Promise<User[]>{
        const record = await this.find({
            select:['id','name','phone','email','type']
        })
        return record;
    }

    async getById(id:string | number) :Promise<User|null> {
        const record = await this.findById(id);
        return record === undefined ? null : record;
    }

    async createOrEditUser(user:User):Promise<User|null> {
        try {
            const checkUser = await this.getById(user.id)
            const newUser = new User();
            newUser.name = user.name || checkUser?.name || null;
            newUser.email = user.email || checkUser?.email || null;
            newUser.phone = user.phone || checkUser?.phone || null;
            newUser.type = user.type || checkUser?.type || null;
            const record = await this.insertOrUpdate('user',newUser);

            return record ?? null;
        } catch(e) {
            return null;
        }
    }

}

export default UserRepository