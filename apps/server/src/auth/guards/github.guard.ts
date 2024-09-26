import { Injectable } from "@nestjs/common";//import
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GitHubGuard extends AuthGuard("github") {}
