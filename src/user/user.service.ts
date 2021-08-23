import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const user = await User.create({
      name: createUserDto.name,
    })
    return JSON.stringify(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const result = await User.update(updateUserDto, { where: { id } }).then(
      result => {
        return "update success";
      }
    ).catch(
      err => {
        return "update fail";
      }
    )
    return result;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
