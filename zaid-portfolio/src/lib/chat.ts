import profile from '../data/profile.json';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function askOpenAI(question: string, apiKey?: string) {
  const knowledge = `Bio: ${profile.bio}. Goals: ${profile.careerGoals}. Projects: ${profile.projects
    .map((p) => `${p.name} - ${p.summary}`)
    .join(' | ')}. Certifications: ${profile.certifications.join(', ')}.`;

  const payload = {
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are Zaid Shaikh\'s AI twin. Answer concisely using the provided knowledge base. Highlight metrics and offer a friendly tone.'
      },
      { role: 'system', content: knowledge },
      { role: 'user', content: question }
    ],
    temperature: 0.5
  };

  if (!apiKey) {
    return buildLocalResponse(question);
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    return content ?? buildLocalResponse(question);
  } catch (error) {
    console.error('OpenAI error', error);
    return buildLocalResponse(question);
  }
}

function buildLocalResponse(question: string) {
  const normalized = question.toLowerCase();
  if (normalized.includes('project') || normalized.includes('case')) {
    return profile.projects.map((p) => `${p.name}: ${p.summary}`).join('\n');
  }
  if (normalized.includes('cert')) {
    return `Zaid currently holds ${profile.certifications.join(', ')}.`;
  }
  if (normalized.includes('goal') || normalized.includes('career')) {
    return profile.careerGoals;
  }
  return `${profile.bio} Ask me about projects, certifications, or roadmap!`;
}
