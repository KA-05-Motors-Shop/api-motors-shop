import { MigrationInterface, QueryRunner } from "typeorm";

export class onDeleteCascadeInVehicles1660401278605 implements MigrationInterface {
    name = 'onDeleteCascadeInVehicles1660401278605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_20f139b9d79f917ef735efacb00"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_20f139b9d79f917ef735efacb00" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_20f139b9d79f917ef735efacb00"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_20f139b9d79f917ef735efacb00" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
