import PromptForm from "@/components/PromptForm";

export default function PromptPage() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="w-full">
                <h1 className="text-3xl font-bold mb-6 text-center">Crie seu cronograma</h1>
                <PromptForm />
            </div>
        </section>
    );
}
