import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const SRC = `${import.meta.env.BASE_URL}audio/tung-tung-sahur.mp3`;

const fmt = (s: number) => {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
};

const BrainrotPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCur(a.currentTime);
    const onMeta = () => setDur(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    a.muted = !a.muted;
    setMuted(a.muted);
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Number(e.target.value);
    setCur(a.currentTime);
  };

  const progress = dur ? (cur / dur) * 100 : 0;

  return (
    <div className="mt-3 w-full max-w-md rounded-2xl bg-black/30 md:backdrop-blur-md border border-white/20 p-2.5 shadow-2xl">
      <audio ref={audioRef} src={SRC} loop preload="metadata" />
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-transform hover:scale-110 active:scale-95"
        >
          {playing && (
            <span className="absolute inset-0 rounded-full bg-white/40 md:animate-ping" />
          )}
          {playing ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current ml-0.5" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-1.5 min-w-0">
              {/* Equalizer bars */}
              <div className="flex items-end gap-0.5 h-3">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`w-0.5 bg-white rounded-full ${playing ? "md:animate-pulse" : ""}`}
                    style={{
                      height: playing ? `${30 + ((i * 23) % 70)}%` : "30%",
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: "0.6s",
                    }}
                  />
                ))}
              </div>
              <span className="text-[11px] font-bold text-white truncate">
                Tung Tung Tung Sahur
              </span>
            </div>
            <span className="text-[10px] font-mono text-white/80 tabular-nums">
              {fmt(cur)} / {fmt(dur)}
            </span>
          </div>

          <div className="relative h-1.5 group">
            <div className="absolute inset-0 rounded-full bg-white/20" />
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-white to-white/80 md:shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              style={{ width: `${progress}%` }}
            />
            <input
              type="range"
              min={0}
              max={dur || 0}
              step={0.1}
              value={cur}
              onChange={onSeek}
              className="absolute inset-0 w-full opacity-0 cursor-pointer"
              aria-label="Seek"
            />
          </div>
        </div>

        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default BrainrotPlayer;
