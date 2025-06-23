export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            <p className="text-xl">Gerando seu cronograma… aguarde</p>
        </div>
    );
}
