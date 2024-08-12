/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [
      {
        username: 'Infas',
        email: 'infas1002@gmail.com',
      },
    ];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Infas',
        email: 'infas1002@gmail.com',
        posts: [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      { id: 1, title: 'Post 1', comments: [] },
      { id: 2, title: 'Post 2', comments: [] },
    ];
  }

  //   @Post('create')
  //   createUser(@Req() request: Request, @Res() response: Response) {
  //     console.log(request.body);
  //     response.send('User Created');
  //   }

  @Post('create')
  @UsePipes(new ValidationPipe()) //In user.dto we used IsNotEmpty and IsEmail to validate our username and email.
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return 'User Created';
  }

  //   @Get(':id')
  //   getUserById(@Req() request: Request, @Res() response: Response) {
  //     console.log(request.params);
  //     response.send('user with ID');
  //   }

  //ParseIntPipe used to validate the id as number. If id not a number, it gives error.
  @Get(':id/:postId')
  getUserById(
    @Param('id', ParseIntPipe) id: number,
    @Param('postId') postId: string,
  ) {
    console.log(id, postId);
    return { id, postId };
  }

  @Get('query')
  getUsersByUsingFilter(@Query('sortDesc', ParseBoolPipe) sortDesc: string) {
    console.log(sortDesc);
    return [
      {
        username: 'Safni',
        email: 'safni2001@gmail.com',
      },
      {
        username: 'Infas',
        email: 'infas1002@gmail.com',
      },
    ];
  }
}
