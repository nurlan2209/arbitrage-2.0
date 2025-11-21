import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { FileText, X } from "lucide-react";

const documentsData = [
  {
    id: 1,
    name: { ru: "Пленум Верховного суда" },
    path: "/documents/НП_арбитраж_Бланк.pdf",
  },
  {
    id: 2,
    name: { ru: "Закон об арбитраже" },
    path: "/documents/об_Арбитраже.pdf",
  },
  {
    id: 3,
    name: { ru: "Анализ судебной практики" },
    path: "/documents/analyze_sud_prac.pdf",
  },
];

const DocumentCard = ({ document, lang, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(document)}
      className="bg-white rounded-xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.02]"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          <FileText className="w-8 h-8 text-blue-900" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-900">
            {document.name[lang]}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Нажмите для просмотра документа
          </p>
        </div>
      </div>
    </div>
  );
};

const LegislationPage = () => {
  const { t } = useLanguage();
  const lang = "ru";
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-custom-header">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Законодательство об арбитраже РК
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              В данном разделе представлены ключевые нормативные документы и
              материалы, регулирующие арбитражную деятельность в Республике
              Казахстан
            </p>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentsData.map((doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
                lang={lang}
                onSelect={setSelectedDoc}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <div className="relative w-11/12 h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={selectedDoc.path}
              title={selectedDoc.name[lang]}
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegislationPage;
