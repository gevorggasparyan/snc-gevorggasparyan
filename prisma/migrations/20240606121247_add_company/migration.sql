-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCompanies" (
    "userId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "UserCompanies_pkey" PRIMARY KEY ("userId","companyId")
);

-- CreateTable
CREATE TABLE "_UserCompanies" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCompanies_userId_companyId_key" ON "UserCompanies"("userId", "companyId");

-- CreateIndex
CREATE UNIQUE INDEX "_UserCompanies_AB_unique" ON "_UserCompanies"("A", "B");

-- CreateIndex
CREATE INDEX "_UserCompanies_B_index" ON "_UserCompanies"("B");

-- AddForeignKey
ALTER TABLE "UserCompanies" ADD CONSTRAINT "UserCompanies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCompanies" ADD CONSTRAINT "UserCompanies_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCompanies" ADD CONSTRAINT "_UserCompanies_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCompanies" ADD CONSTRAINT "_UserCompanies_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
