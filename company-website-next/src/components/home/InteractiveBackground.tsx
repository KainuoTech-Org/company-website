"use client";

import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let entities: (Cloud | Particle | PhysicsShape)[] = [];
    let animationFrameId: number;
    let resizeTimeout: NodeJS.Timeout;

    // Mouse tracking
    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Cloud Class
    class Cloud {
      x: number;
      y: number;
      vx: number;
      vy: number;
      scale: number;
      puffs: { x: number; y: number; r: number }[];
      cacheCanvas: HTMLCanvasElement;
      cacheCtx: CanvasRenderingContext2D | null;
      cacheWidth: number;
      cacheHeight: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0.2 + Math.random() * 0.3;
        this.vy = (Math.random() - 0.5) * 0.05;
        this.scale = 0.8 + Math.random() * 0.6;
        
        this.puffs = [];
        const puffCount = 5 + Math.floor(Math.random() * 4);
        
        for (let i = 0; i < puffCount; i++) {
          this.puffs.push({
            x: (Math.random() - 0.5) * 60 * this.scale,
            y: (Math.random() - 0.5) * 30 * this.scale,
            r: (25 + Math.random() * 25) * this.scale
          });
        }

        // Pre-render
        this.cacheCanvas = document.createElement('canvas');
        this.cacheCtx = this.cacheCanvas.getContext('2d');
        this.cacheWidth = 200 * this.scale;
        this.cacheHeight = 100 * this.scale;
        this.cacheCanvas.width = this.cacheWidth;
        this.cacheCanvas.height = this.cacheHeight;
        this.preRender();
      }

      preRender() {
        if (!this.cacheCtx) return;
        const ctx = this.cacheCtx;
        const centerX = this.cacheWidth / 2;
        const centerY = this.cacheHeight / 2;
        
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = 'rgba(212, 175, 55, 0.15)'; 
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 5;

        ctx.beginPath();
        this.puffs.forEach(p => {
            ctx.moveTo(centerX + p.x + p.r, centerY + p.y);
            ctx.arc(centerX + p.x, centerY + p.y, p.r, 0, Math.PI * 2);
        });
        ctx.fill();
      }

      update() {
        // Movement Logic
        const isHovered = this.isPointInside(mouse.x, mouse.y);

        if (!isHovered) {
            this.x += this.vx;
            this.y += this.vy;
        } 

        // Wrap around screen
        if (this.x > width + 150) {
            this.x = -150;
            this.y = Math.random() * height;
        }
        
        if (this.y > height + 100) this.y = -100;
        if (this.y < -100) this.y = height + 100;

        this.draw();
      }

      draw() {
        if (!ctx) return;
        ctx.drawImage(this.cacheCanvas, this.x - this.cacheWidth / 2, this.y - this.cacheHeight / 2);
      }

      isPointInside(mx: number, my: number) {
        const dist = Math.sqrt((this.x - mx)**2 + (this.y - my)**2);
        return dist < (70 * this.scale); 
      }

      explode() {
        for (let i = 0; i < 15; i++) {
            entities.push(new Particle(this.x, this.y, this.scale));
        }
      }
    }

    // Particle Class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      decay: number;
      size: number;

      constructor(x: number, y: number, scale: number) {
        this.x = x + (Math.random() - 0.5) * 50;
        this.y = y + (Math.random() - 0.5) * 30;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.life = 1.0;
        this.decay = Math.random() * 0.03 + 0.02;
        this.size = (Math.random() * 10 + 5) * scale;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        
        if (this.life > 0) {
            this.draw();
        }
        return this.life <= 0;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = '#D4AF37';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // PhysicsShape Class
    class PhysicsShape {
      x: number;
      y: number;
      vx: number;
      vy: number;
      gravity: number;
      friction: number;
      drag: number;
      type: number;
      size: number;
      color: string;
      rotation: number;
      rotSpeed: number;
      life: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 10;
        this.vy = (Math.random() - 1) * 10 - 5;
        
        this.gravity = 0.5;
        this.friction = 0.8;
        this.drag = 0.99;
        
        this.type = Math.floor(Math.random() * 3);
        this.size = Math.random() * 10 + 8;
        this.color = Math.random() > 0.5 ? '#D4AF37' : '#1A1A1A';
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.2;
        
        this.life = 600;
      }

      update() {
        this.vy += this.gravity;
        this.vx *= this.drag;
        
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotSpeed;
        this.life--;

        // Floor Collision
        if (this.y + this.size > height) {
            this.y = height - this.size;
            this.vy *= -this.friction;
        }
        // Wall Collision
        if (this.x + this.size > width) {
            this.x = width - this.size;
            this.vx *= -this.friction;
        }
        if (this.x - this.size < 0) {
            this.x = this.size;
            this.vx *= -this.friction;
        }

        // Mouse Interaction
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 50) {
            const force = (50 - dist) / 50;
            this.vx += (dx / dist) * force * 5;
            this.vy += (dy / dist) * force * 5;
        }

        if (this.life > 0) {
            this.draw();
            return false;
        }
        return true;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        
        if (this.life < 50) ctx.globalAlpha = this.life / 50;

        ctx.beginPath();
        if (this.type === 0) {
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        } else if (this.type === 1) {
            ctx.rect(-this.size, -this.size, this.size*2, this.size*2);
        } else {
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size, this.size);
            ctx.lineTo(-this.size, this.size);
            ctx.closePath();
        }
        ctx.fill();
        ctx.restore();
      }
    }

    const spawnPhysicsShapes = (x: number, y: number) => {
        const count = 5 + Math.floor(Math.random() * 5);
        for (let i = 0; i < count; i++) {
            entities.push(new PhysicsShape(x, y));
        }
    };

    const handleMouseDown = (e: MouseEvent) => {
        const clickX = e.clientX;
        const clickY = e.clientY;
        let hitCloud = false;
        
        for (let i = entities.length - 1; i >= 0; i--) {
            const entity = entities[i];
            if (entity instanceof Cloud && entity.isPointInside(clickX, clickY)) {
                entity.explode();
                entities.splice(i, 1);
                hitCloud = true;
                break;
            }
        }

        if (!hitCloud) {
            spawnPhysicsShapes(clickX, clickY);
        }
    };

    const initWorld = () => {
        entities = [];
        const cloudCount = width < 768 ? 5 : 10;
        for (let i = 0; i < cloudCount; i++) {
            entities.push(new Cloud());
        }
    };

    const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initWorld();
    };

    const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        
        for (let i = entities.length - 1; i >= 0; i--) {
            const ent = entities[i];
            if (ent instanceof Particle || ent instanceof PhysicsShape) {
                if (ent.update()) {
                    entities.splice(i, 1);
                }
            } else {
                // @ts-ignore
                ent.update();
            }
        }
        
        animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resize, 200);
    });

    resize();
    animate();

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="bg-canvas"
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-auto"
    />
  );
}
