-- CreateTable
CREATE TABLE "UserPokemon" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPokemon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserPokemon" ADD CONSTRAINT "UserPokemon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPokemon" ADD CONSTRAINT "UserPokemon_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
