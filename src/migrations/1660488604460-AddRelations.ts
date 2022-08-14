import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelations1660488604460 implements MigrationInterface {
    name = 'AddRelations1660488604460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "commentsId" uuid`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_daee1524aaa2d7b534ddabf3734" FOREIGN KEY ("commentsId") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_daee1524aaa2d7b534ddabf3734"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "commentsId"`);
    }

}
