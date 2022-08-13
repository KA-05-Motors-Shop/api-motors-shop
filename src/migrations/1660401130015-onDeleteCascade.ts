import { MigrationInterface, QueryRunner } from "typeorm";

export class onDeleteCascade1660401130015 implements MigrationInterface {
    name = 'onDeleteCascade1660401130015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_20f139b9d79f917ef735efacb00"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_20f139b9d79f917ef735efacb00" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_20f139b9d79f917ef735efacb00"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_20f139b9d79f917ef735efacb00" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
