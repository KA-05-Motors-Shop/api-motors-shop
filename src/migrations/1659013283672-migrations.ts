import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1659013283672 implements MigrationInterface {
    name = 'migrations1659013283672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "type_of_ad" character varying NOT NULL, "year" integer NOT NULL, "km" integer NOT NULL, "price" numeric(20,2) NOT NULL, "description" character varying(500) NOT NULL, "type_of_vehicle" character varying NOT NULL, "cover_image" character varying NOT NULL, "gallery_image" character varying NOT NULL, "gallery_image2" character varying, "gallery_image3" character varying, "gallery_image4" character varying, "gallery_image5" character varying, "gallery_image6" character varying, "published" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicles"`);
    }

}
