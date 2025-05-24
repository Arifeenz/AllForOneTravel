
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Question = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast({
        title: "Error",
        description: "Please enter a question about Phuket",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Sending question to webhook:", question);

    try {
      const response = await fetch('https://hook.eu2.make.com/p8mtupdv1mq9r5qsuu16xrisnu3y2ugl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Received response:", data);
        setResponse(data);
        toast({
          title: "Success",
          description: "Got an answer about Phuket!",
        });
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Error sending question:', error);
      toast({
        title: "Error",
        description: "Failed to get an answer. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderResponse = (data: any) => {
    if (!data) return null;

    return (
      <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200 rounded-2xl">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Answer:</h3>
        <div className="space-y-4">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="border-l-4 border-cyan-400 pl-4">
              <h4 className="font-semibold text-gray-700 capitalize mb-1">
                {key.replace(/_/g, ' ')}:
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
              </p>
            </div>
          ))}
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Ask About Phuket
            </h1>
            <p className="text-xl text-gray-600">
              Get expert recommendations and local insights about your Phuket adventure
            </p>
          </div>

          <Card className="p-8 bg-white rounded-2xl shadow-lg border-cyan-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="question" className="block text-lg font-semibold text-gray-700 mb-3">
                  Ask us anything about Phuket
                </label>
                <Input
                  id="question"
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="e.g., What are the best beaches to visit in Phuket?"
                  className="w-full text-lg py-4 rounded-xl border-cyan-200 focus:border-cyan-400 focus:ring-cyan-400"
                  disabled={isLoading}
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 rounded-full text-lg transition-all duration-200"
              >
                {isLoading ? 'Getting Answer...' : 'Submit Question'}
              </Button>
            </form>
          </Card>

          {response && (
            <div className="mt-8">
              {renderResponse(response)}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Question;
