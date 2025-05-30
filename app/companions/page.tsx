import Companioncard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const Companions = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? String(filters.subject) : '';
  const topic = filters.topic ? String(filters.topic) : '';

  const companions = await getAllCompanions({ subject, topic });

  console.log('Companions:', companions);
  

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <Companioncard 
            key={companion.id} 
            {... companion} 
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>

  );
}
export default Companions;