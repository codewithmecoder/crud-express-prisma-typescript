import { Prisma, User } from "@prisma/client";

/**
 * @openapi
 * components:
 *  schemas:
 *    UserCreateInput:
 *      type: object
 *      required:
 *        - username
 *        - isActive
 *      properties:
 *        username:
 *          type: string
 *          default: example
 *        isActive:
 *          type: bool
 *          default: true
 *    UserCreateResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        username:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export type swaggerUserCreateInput = Prisma.UserCreateInput;

/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: number
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *        username:
 *          type: string
 *          default: example
 *        isActive:
 *          type: bool
 *          default: true
 */

export type swaggerUser = User;
