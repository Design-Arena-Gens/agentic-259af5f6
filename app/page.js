'use client';
import { useState } from 'react';

const novel = {
  title: "The Immortal Path: Chronicles of the Azure Dragon",
  author: "By the Wandering Sage",
  chapters: [
    {
      number: 1,
      title: "The Fallen Prodigy",
      content: `The morning sun cast its golden rays over Azure Peak Sect, illuminating the countless pavilions that dotted the mountain range. Lin Feng stood at the edge of the cliff, his tattered robes fluttering in the wind, a bitter smile playing on his lips.

Three years ago, he had been the pride of the sect—the youngest to reach the Foundation Establishment realm at age fifteen. Now, at eighteen, his cultivation was crippled, his dantian shattered by a mysterious poison during the Sect Competition.

"Still wallowing in self-pity, trash?" A mocking voice echoed behind him.

Lin Feng didn't turn. He recognized the voice of Zhou Tian, once his junior, now an inner disciple two realms above him.

"The engagement between you and Senior Sister Mei is being annulled today. Know your place and don't embarrass yourself at the ceremony."

As Zhou Tian's laughter faded, Lin Feng clenched his fists. The broken jade pendant around his neck—his mother's only inheritance—suddenly grew warm.

A voice, ancient and powerful, resonated in his mind: "Finally... after ten thousand years... a suitable host..."

Lin Feng's eyes widened as knowledge flooded his consciousness. The pendant contained the remnant soul of the Azure Dragon Emperor, a sovereign who once ruled the Celestial Realm!

"Boy, your dantian isn't destroyed—it's been transformed. That poison awakened the Primordial Chaos Body within you. You're not trash... you're a phoenix waiting to rise from the ashes!"

For the first time in three years, Lin Feng smiled—a genuine smile that carried a hint of his former confidence.

"Zhou Tian, Senior Sister Mei, Azure Peak Sect... you all abandoned me at my lowest. Soon, you'll regret not showing this kindness when I was weak."

The cultivation world was about to witness the rise of a legend.`
    },
    {
      number: 2,
      title: "The Azure Dragon's Legacy",
      content: `Within his consciousness, Lin Feng found himself standing in a vast starry void. Before him materialized a towering figure—a dragon with scales that shimmered between azure and gold, its eyes containing the wisdom of eons.

"You are the Azure Dragon Emperor?" Lin Feng asked, his voice steady despite the overwhelming pressure.

"A remnant of what I once was," the dragon replied, its voice rumbling like thunder. "In my prime, I stood at the peak of the Celestial Realm, having transcended the nine tribulations. But even emperors have enemies. I was betrayed, poisoned by the Seven-Star Oblivion Poison."

"The same poison in my body?"

"Precisely. What destroyed me has paradoxically saved you. Your Primordial Chaos Body is one in a billion—capable of absorbing all energies, including poison. The Azure Peak Sect's fool who poisoned you inadvertently awakened your true potential."

The dragon's form began to fade. "I'm too weak to manifest for long. But I've left you my inheritance—the Nine Heavens Azure Dragon Art. It has nine levels, each corresponding to a major cultivation realm. Master it, and you won't just reach my former heights—you'll surpass them."

"What about my engagement ceremony today?"

The dragon laughed, a sound like crashing waves. "Go. Show them a glimpse of what they've lost. But remember—true power comes from patience. Don't reveal your full capabilities too early. The cultivation world is full of old monsters who eliminate threats before they can mature."

As Lin Feng's consciousness returned to his body, he felt it—a trickle of spiritual energy, pure and potent, flowing through meridians that had been closed for years. He was back at the first level of Qi Condensation, but this energy was different, purer, more powerful than before.

He looked toward the sect's grand hall where his humiliation awaited.

"Let's give them a show they won't forget."`
    },
    {
      number: 3,
      title: "The Annulment Ceremony",
      content: `The Grand Hall of Azure Peak Sect was packed with disciples and elders. At the center, Mei Xue stood in elegant white robes embroidered with plum blossoms, her beauty causing many hearts to race. Beside her stood Zhou Tian, his hand possessively near hers.

Sect Master Yun Hai sat on the jade throne, his expression impassive. "We gather today to formally dissolve the engagement between my personal disciple Mei Xue and... Lin Feng."

Whispers filled the hall. Most hadn't seen Lin Feng in months.

"That trash is probably too ashamed to even show his face."

"Senior Sister Mei is better off. I heard Zhou Tian has reached Golden Core formation. He's a true genius."

The massive doors suddenly swung open. Lin Feng walked in, his posture straight, his tattered robes somehow dignified on his frame. The mockery in the hall intensified.

"He actually dared to come!"

Mei Xue's eyes flickered with complex emotions—guilt, pity, relief. "Lin Feng, this isn't personal. You understand, don't you? Cultivation is everything in this world. Without it, we... we just live in different realms now."

"I understand perfectly, Senior Sister," Lin Feng said calmly, producing the engagement token from his robes—a jade phoenix. "I return this to you freely."

Zhou Tian sneered. "At least you know your place now. Perhaps we'll let you serve as an outer sect servant. It would be charitable—"

His words died as Lin Feng's spiritual energy erupted. It was only at the first level of Qi Condensation, but its quality—its purity—caused several elders to sit up straight.

"This energy..." Elder Feng muttered. "Impossible. It's more refined than even Golden Core cultivators..."

Lin Feng smiled. "Sect Master, I have one request before this engagement is annulled."

"Speak."

"The sect rules state that any personal disciple has the right to challenge for their ranking position. I challenge Zhou Tian for his position as third-ranked inner disciple."

The hall exploded in shocked conversation.

Zhou Tian laughed. "You? Challenge me? You're at the first level of Qi Condensation! I'm at the third level of Golden Core! The gap is insurmountable!"

"Are you afraid?" Lin Feng asked simply.

The provocation worked. Zhou Tian's face reddened. "Fine! I'll cripple you myself! Then everyone will know what happens to those who don't know their limits!"

Sect Master Yun Hai raised his hand. "The challenge is accepted. The duel will take place in three days at the Martial Platform. This will serve as entertainment for the outer sect disciple selection trials."

As Lin Feng turned to leave, his eyes met Mei Xue's one last time. She opened her mouth as if to say something, but he was already walking away.

In his consciousness, the Azure Dragon chuckled. "Three days. Can you reach the Foundation Establishment realm in three days?"

"No," Lin Feng replied mentally. "But I don't need to. The Nine Heavens Azure Dragon Art doesn't rely on realm alone, does it?"

"Smart boy. Very well. Your first true lesson begins now."

The legend of the Azure Dragon's inheritor had begun.`
    },
    {
      number: 4,
      title: "Three Days of Transformation",
      content: `Lin Feng retreated to his shabby dwelling on the outer edges of the sect—a small cave barely worthy of the name. But solitude was what he needed.

"The Nine Heavens Azure Dragon Art has a fundamental difference from normal cultivation techniques," the Azure Dragon's voice instructed. "Normal cultivators gather spiritual energy to expand their dantian, like filling a cup. But you? You compress and refine, creating a core of energy so dense that a single drop of your spiritual energy equals a river of theirs."

For the first day, Lin Feng sat in meditation, learning to sense the Primordial Chaos Body's unique nature. His body absorbed everything—the spiritual energy in the air, the moonlight, even the ambient life force from the plants around his cave.

"Normal cultivators fear poison and impurities in energy. You consume everything and refine it. This is why the Seven-Star Oblivion Poison didn't kill you—your body processed it as fuel."

By the second day, Lin Feng had broken through to the third level of Qi Condensation. But more importantly, he was learning the Azure Dragon's martial techniques.

"The First Form: Dragon Emerges from the Abyss. It's not about strength—it's about momentum and the perfect circulation of energy. Watch."

In his consciousness, Lin Feng observed the Azure Dragon execute the technique. It seemed simple—a straightforward palm strike. But the way the energy flowed, spiraled, and exploded at the point of impact created devastating power.

He practiced until his muscles burned, until blood seeped from his pores, until the movement became instinct.

The third day arrived. Lin Feng had reached the fifth level of Qi Condensation—a breakthrough that would normally take months, achieved in three days. His spiritual energy was still vastly inferior to Zhou Tian's in quantity, but in quality...

"Remember," the Azure Dragon cautioned, "you can defeat him, but don't kill him. Show enough to restore your reputation, but hide your true depth. Old monsters watching will gauge your threat level."

"I understand, Master."

"Master? Hmm, I suppose I am your master now. Very well, disciple. Go show the cultivation world that the age of the Azure Dragon isn't over—it's just beginning anew."

As Lin Feng walked toward the Martial Platform, where thousands had gathered to watch his "humiliation," he felt not nervousness but anticipation.

The phoenix was ready to spread its wings.`
    },
    {
      number: 5,
      title: "Dragon Versus Phoenix",
      content: `The Martial Platform was a massive square stage carved from white jade, surrounded by rising tiers of seats filled with disciples, elders, and even visiting cultivators from allied sects. The atmosphere buzzed with excitement and mockery.

"The cripple really showed up!"

"Zhou Tian will crush him in one move. This is just bullying."

"I heard some elders bet on how long the trash will last. Most said three seconds."

On the platform, Zhou Tian stood confidently, his Golden Core cultivation causing his aura to shimmer visibly—a golden phoenix manifested behind him, the mark of his Phoenix Flame Art.

Lin Feng stepped onto the opposite side, his plain robes and calm demeanor a stark contrast.

Sect Master Yun Hai stood between them. "This is a formal ranking challenge. Death is not permitted, but injuries are expected. Do you both understand?"

"Yes, Sect Master," Zhou Tian said with a predatory smile.

"Yes," Lin Feng replied simply.

"Begin!"

Zhou Tian immediately launched forward, his speed creating afterimages. "Phoenix Flame Fist!" His fist erupted in golden flames, the heat causing the air itself to distort.

To everyone's shock, Lin Feng didn't dodge. He stepped forward, his right palm rising to meet the flaming fist.

"Dragon Emerges from the Abyss!"

The collision created a shockwave that swept across the platform. The flames scattered. Zhou Tian's confident expression froze, then twisted in pain—his arm was numb, his bones creaking from the impact.

"Impossible!" someone shouted. "He's only at Qi Condensation!"

Zhou Tian leaped back, shock and rage warring on his face. "You... you hid your strength! But it won't matter!" He formed complex hand seals, and three flaming phoenixes materialized around him. "Phoenix Celestial Array!"

The three phoenixes dove at Lin Feng from different angles, their flames capable of melting iron.

Elder Feng leaned forward in his seat. "He's dead. That technique is peak Golden Core power. Even Foundation Establishment cultivators would struggle."

But in his consciousness, Lin Feng heard the Azure Dragon's amused voice: "Second Form: Dragon Rides the Storm Clouds. Disperse his technique and strike his weakness."

Lin Feng's body became a blur. His movement technique defied logic—he seemed to phase through space itself, appearing behind Zhou Tian before anyone could track his motion.

"Second Form!" His palm struck Zhou Tian's back.

The impact sent Zhou Tian flying off the platform, coughing blood. The three flaming phoenixes dispersed, their energy destabilized.

Silence blanketed the arena.

Sect Master Yun Hai slowly stood, his eyes wide. "Lin Feng... wins."

The silence shattered into chaos.

"How is this possible?!"

"His movement technique... I've never seen anything like it!"

Mei Xue's face had gone pale, her hands trembling. The man she'd pitied and abandoned had just defeated a Golden Core cultivator while only at Qi Condensation.

Lin Feng turned to leave, but a powerful aura suddenly pressed down on the arena. An elder in crimson robes—Elder Blood Raven, known for his vicious temperament—floated down.

"Interesting. Very interesting. Boy, that technique... where did you learn it?"

Lin Feng's expression didn't change, but internally, the Azure Dragon warned: "Careful. This one is at Soul Wandering Realm. He's dangerous."

"I found it in an ancient ruin during my... recovery period," Lin Feng lied smoothly.

Elder Blood Raven's eyes narrowed, clearly not entirely believing him, but before he could press further, another voice intervened.

"Blood Raven, are you planning to bully a junior?" A woman in flowing blue robes descended—Elder Ling Yue, one of the sect's few female elders and known for her fairness.

The tension between the two elders was palpable, but Blood Raven eventually sneered and flew away.

Elder Ling Yue looked at Lin Feng with interest. "Come see me tomorrow at Moon Pavilion. I have a proposition for you."

As Lin Feng left the platform, he felt countless eyes on his back—some filled with respect, some with envy, and some with dangerous intent.

The Azure Dragon spoke: "You've announced your return to the world. Now comes the hard part—surviving the attention."

Lin Feng's expression remained calm, but he knew the truth: his true journey was only just beginning.`
    }
  ]
};

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [autoScroll, setAutoScroll] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      color: '#e0e0e0',
      fontFamily: 'Georgia, serif',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '15px',
        padding: '40px',
        boxShadow: '0 10px 50px rgba(0, 0, 0, 0.5)'
      }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#4db8ff',
            textShadow: '0 0 20px rgba(77, 184, 255, 0.5)',
            marginBottom: '10px',
            fontWeight: 'bold'
          }}>
            {novel.title}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#9aa5b1',
            fontStyle: 'italic',
            marginBottom: '5px'
          }}>
            {novel.author}
          </p>
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            marginTop: '10px'
          }}>
            A Xuanhuan Cultivation Epic
          </p>
        </header>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          {novel.chapters.map((chapter, index) => (
            <button
              key={index}
              onClick={() => setCurrentChapter(index)}
              style={{
                padding: '10px 20px',
                background: currentChapter === index ? '#4db8ff' : 'rgba(77, 184, 255, 0.2)',
                color: currentChapter === index ? '#000' : '#4db8ff',
                border: '2px solid #4db8ff',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: currentChapter === index ? 'bold' : 'normal',
                transition: 'all 0.3s ease',
                boxShadow: currentChapter === index ? '0 0 15px rgba(77, 184, 255, 0.5)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (currentChapter !== index) {
                  e.target.style.background = 'rgba(77, 184, 255, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentChapter !== index) {
                  e.target.style.background = 'rgba(77, 184, 255, 0.2)';
                }
              }}
            >
              Chapter {chapter.number}
            </button>
          ))}
        </div>

        <div style={{
          background: 'rgba(20, 20, 30, 0.8)',
          borderRadius: '10px',
          padding: '30px',
          border: '1px solid rgba(77, 184, 255, 0.3)'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            color: '#4db8ff',
            marginBottom: '10px',
            textAlign: 'center'
          }}>
            Chapter {novel.chapters[currentChapter].number}: {novel.chapters[currentChapter].title}
          </h2>

          <div style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent, #4db8ff, transparent)',
            margin: '20px 0'
          }}></div>

          <div style={{
            fontSize: '1.15rem',
            lineHeight: '1.9',
            color: '#d0d0d0',
            textAlign: 'justify',
            whiteSpace: 'pre-wrap'
          }}>
            {novel.chapters[currentChapter].content}
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '30px',
          gap: '10px'
        }}>
          <button
            onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
            disabled={currentChapter === 0}
            style={{
              padding: '12px 30px',
              background: currentChapter === 0 ? '#333' : 'rgba(77, 184, 255, 0.2)',
              color: currentChapter === 0 ? '#666' : '#4db8ff',
              border: '2px solid ' + (currentChapter === 0 ? '#333' : '#4db8ff'),
              borderRadius: '8px',
              cursor: currentChapter === 0 ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            ← Previous Chapter
          </button>

          <button
            onClick={() => setCurrentChapter(Math.min(novel.chapters.length - 1, currentChapter + 1))}
            disabled={currentChapter === novel.chapters.length - 1}
            style={{
              padding: '12px 30px',
              background: currentChapter === novel.chapters.length - 1 ? '#333' : 'rgba(77, 184, 255, 0.2)',
              color: currentChapter === novel.chapters.length - 1 ? '#666' : '#4db8ff',
              border: '2px solid ' + (currentChapter === novel.chapters.length - 1 ? '#333' : '#4db8ff'),
              borderRadius: '8px',
              cursor: currentChapter === novel.chapters.length - 1 ? 'not-allowed' : 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            Next Chapter →
          </button>
        </div>

        <footer style={{
          marginTop: '50px',
          padding: '20px',
          textAlign: 'center',
          borderTop: '1px solid rgba(77, 184, 255, 0.3)',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <p>A tale of cultivation, revenge, and the path to immortality</p>
          <p style={{ marginTop: '10px' }}>
            "In the vast cultivation world, strength is everything. The weak are trampled, and the strong ascend to the heavens."
          </p>
        </footer>
      </div>
    </div>
  );
}
