import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Satisfaction() {
  const [value, setValue] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#B6D9FC] flex items-center justify-center p-4">
      <Card className="max-w-md w-full mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-[#1D92C5] text-2xl font-bold">Удовлетворенность сервисом</CardTitle>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="text-center text-[#1D92C5] font-semibold py-8">Спасибо за ваш отзыв!</div>
          ) : (
            <>
              <div className="mb-6 text-lg text-gray-700">Оцените, насколько вы довольны сервисом:</div>
              <div className="flex justify-center gap-2 mb-6">
                {[1,2,3,4,5].map(n => (
                  <button
                    key={n}
                    className={`w-10 h-10 rounded-full text-2xl font-bold border-2 transition-all ${value === n ? 'bg-[#6AFCBA] border-[#1D92C5] text-white' : 'bg-white border-[#B6D9FC] text-[#1D92C5] hover:bg-[#B6D9FC]'}`}
                    onClick={() => setValue(n)}
                  >{n}</button>
                ))}
              </div>
              <Button
                className="w-full bg-[#6AFCBA] text-white hover:bg-[#1D92C5]"
                disabled={value === 0}
                onClick={() => setSent(true)}
              >
                Отправить
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 