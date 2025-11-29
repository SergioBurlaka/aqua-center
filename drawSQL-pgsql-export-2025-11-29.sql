CREATE TABLE "brigades"(
    "id" INTEGER NOT NULL DEFAULT 'nextval(' public.brigades_id_seq ',::regclass)',
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "brigades" ADD PRIMARY KEY("id");
CREATE TABLE "clients"(
    "id" INTEGER NOT NULL DEFAULT 'nextval(' public.clients_id_seq ',::regclass)',
    "name" VARCHAR(255) NOT NULL,
    "address" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" BIGINT NOT NULL
);
ALTER TABLE
    "clients" ADD PRIMARY KEY("id");
CREATE TABLE "locations"(
    "id" INTEGER NOT NULL DEFAULT 'nextval(' public.locations_id_seq ',::regclass)',
    "client_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" BIGINT NOT NULL,
    "new_column" BIGINT NOT NULL
);
ALTER TABLE
    "locations" ADD PRIMARY KEY("id");
CREATE TABLE "roles"(
    "id" INTEGER NOT NULL DEFAULT 'nextval(' public.roles_id_seq ',::regclass)',
    "role" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "roles" ADD PRIMARY KEY("id");
ALTER TABLE
    "roles" ADD CONSTRAINT "roles_role_unique" UNIQUE("role");
CREATE TABLE "users"(
    "id" INTEGER NOT NULL DEFAULT 'nextval(' public.users_id_seq ',::regclass)',
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NULL DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");
CREATE TABLE "workers"(
    "id" INTEGER NOT NULL DEFAULT 'nextval(' public.workers_id_seq ',::regclass)',
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role_id" INTEGER NOT NULL,
    "brigade_id" BIGINT NOT NULL
);
ALTER TABLE
    "workers" ADD PRIMARY KEY("id");
CREATE TABLE "routes"(
    "id" INTEGER NOT NULL,
    "route_date" DATE NOT NULL,
    "status_start_route" BOOLEAN NOT NULL,
    "start_location_id" INTEGER NOT NULL,
    "start_point" BIGINT NOT NULL,
    "start_time" DATE NOT NULL,
    "end_location_id" INTEGER NOT NULL,
    "end_point" BIGINT NOT NULL,
    "end_time" DATE NOT NULL,
    "work_invoice_id" INTEGER NOT NULL,
    "installation_invoice_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "worker_id" INTEGER NOT NULL,
    "path_length" BIGINT NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
);
ALTER TABLE
    "routes" ADD PRIMARY KEY("id");
CREATE TABLE "projects"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "owner_id" INTEGER NOT NULL
);
ALTER TABLE
    "projects" ADD PRIMARY KEY("id");
CREATE TABLE "works"(
    "id" BIGINT NOT NULL,
    "work_category" TEXT NOT NULL,
    "work_name" BIGINT NOT NULL,
    "unit_id" INTEGER NOT NULL,
    "prace" BIGINT NOT NULL
);
ALTER TABLE
    "works" ADD PRIMARY KEY("id");
CREATE TABLE "work Invoices"(
    "id" BIGINT NOT NULL,
    "work_id" INTEGER NOT NULL,
    "count" BIGINT NOT NULL
);
ALTER TABLE
    "work Invoices" ADD PRIMARY KEY("id");
CREATE TABLE "installation invoices"(
    "id" BIGINT NOT NULL,
    "equipment_id" INTEGER NOT NULL,
    "quantity" BIGINT NOT NULL
);
ALTER TABLE
    "installation invoices" ADD PRIMARY KEY("id");
CREATE TABLE "equipment"(
    "id" BIGINT NOT NULL,
    "name" BIGINT NOT NULL,
    "price" BIGINT NOT NULL
);
ALTER TABLE
    "equipment" ADD PRIMARY KEY("id");
CREATE TABLE "units"(
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);
ALTER TABLE
    "units" ADD PRIMARY KEY("id");
ALTER TABLE
    "routes" ADD CONSTRAINT "routes_end_location_id_foreign" FOREIGN KEY("end_location_id") REFERENCES "locations"("id");
ALTER TABLE
    "works" ADD CONSTRAINT "works_unit_id_foreign" FOREIGN KEY("unit_id") REFERENCES "units"("id");
ALTER TABLE
    "routes" ADD CONSTRAINT "routes_installation_invoice_id_foreign" FOREIGN KEY("installation_invoice_id") REFERENCES "installation invoices"("id");
ALTER TABLE
    "routes" ADD CONSTRAINT "routes_worker_id_foreign" FOREIGN KEY("worker_id") REFERENCES "workers"("id");
ALTER TABLE
    "locations" ADD CONSTRAINT "locations_client_id_foreign" FOREIGN KEY("client_id") REFERENCES "clients"("id");
ALTER TABLE
    "routes" ADD CONSTRAINT "routes_start_location_id_foreign" FOREIGN KEY("start_location_id") REFERENCES "locations"("id");
ALTER TABLE
    "workers" ADD CONSTRAINT "workers_brigade_id_foreign" FOREIGN KEY("brigade_id") REFERENCES "brigades"("id");
ALTER TABLE
    "installation invoices" ADD CONSTRAINT "installation invoices_equipment_id_foreign" FOREIGN KEY("equipment_id") REFERENCES "equipment"("id");
ALTER TABLE
    "work Invoices" ADD CONSTRAINT "work invoices_work_id_foreign" FOREIGN KEY("work_id") REFERENCES "works"("id");
ALTER TABLE
    "routes" ADD CONSTRAINT "routes_project_id_foreign" FOREIGN KEY("project_id") REFERENCES "projects"("id");
ALTER TABLE
    "workers" ADD CONSTRAINT "workers_role_id_foreign" FOREIGN KEY("role_id") REFERENCES "roles"("id");
ALTER TABLE
    "routes" ADD CONSTRAINT "routes_work_invoice_id_foreign" FOREIGN KEY("work_invoice_id") REFERENCES "work Invoices"("id");