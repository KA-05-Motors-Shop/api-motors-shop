import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeRelations1660488899710 implements MigrationInterface {
    name = 'ChangeRelations1660488899710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_daee1524aaa2d7b534ddabf3734"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "commentsId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "vehicleId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_1780f918d3523791d18590d67a4" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_1780f918d3523791d18590d67a4"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "vehicleId"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "commentsId" uuid`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_daee1524aaa2d7b534ddabf3734" FOREIGN KEY ("commentsId") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
