import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, request, Response } from 'express';

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

  @Post()
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.send('User Created');
  }
}
