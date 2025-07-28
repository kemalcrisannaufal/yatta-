import MainLayout from "@/components/layouts/MainLayout";
import CharacterDetail from "@/components/views/CharacterDetail";

const CharactersPage = () => {
  return (
    <MainLayout title="Yatta! | Characters">
      <CharacterDetail />
    </MainLayout>
  );
};

export default CharactersPage;
