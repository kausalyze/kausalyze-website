import React, { useEffect, useRef } from 'react';
import './CausalGraphAnimation.css';

const CausalGraphAnimation = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Node class representing points in the causal graph
  class Node {
    constructor(x, y, radius, isRoot = false, isHighlighted = false) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.isRoot = isRoot;
      this.isHighlighted = isHighlighted;
      this.connections = [];
      this.velocityX = Math.random() * 0.4 - 0.2;
      this.velocityY = Math.random() * 0.4 - 0.2;
      this.originX = x;
      this.originY = y;
    }

    addConnection(node) {
      this.connections.push(node);
    }

    update(canvasWidth, canvasHeight) {
      // Keep nodes within bounds with some movement
      this.x += this.velocityX;
      this.y += this.velocityY;

      // Limit movement to stay close to original position
      if (Math.abs(this.x - this.originX) > 40) {
        this.velocityX *= -1;
      }

      if (Math.abs(this.y - this.originY) > 40) {
        this.velocityY *= -1;
      }

      // Ensure nodes stay within canvas bounds
      if (this.x < this.radius) {
        this.x = this.radius;
        this.velocityX *= -1;
      } else if (this.x > canvasWidth - this.radius) {
        this.x = canvasWidth - this.radius;
        this.velocityX *= -1;
      }

      if (this.y < this.radius) {
        this.y = this.radius;
        this.velocityY *= -1;
      } else if (this.y > canvasHeight - this.radius) {
        this.y = canvasHeight - this.radius;
        this.velocityY *= -1;
      }
    }

    draw(ctx) {
      // Draw connections
      this.connections.forEach(node => {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(node.x, node.y);

        if (this.isHighlighted && node.isHighlighted) {
          ctx.strokeStyle = '#A5CDBD'; // Highlighted connection
          ctx.lineWidth = 3;
        } else {
          ctx.strokeStyle = 'rgba(165, 205, 189, 0.3)'; // Dim connection
          ctx.lineWidth = 1;
        }

        ctx.stroke();
      });

      // Draw node
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

      if (this.isRoot) {
        ctx.fillStyle = '#A5CDBD'; // Root node
      } else if (this.isHighlighted) {
        ctx.fillStyle = 'rgba(165, 205, 189, 0.8)'; // Highlighted node
      } else {
        ctx.fillStyle = 'rgba(165, 205, 189, 0.4)'; // Normal node
      }

      ctx.fill();

      // Add glow effect for highlighted nodes
      if (this.isHighlighted || this.isRoot) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + 5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(165, 205, 189, 0.2)';
        ctx.fill();
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let nodes = [];
    let rootNode = null;
    let animationProgress = 0;
    let highlightedPath = []; // The path to highlight as animation progresses

    // Set canvas size
    const resizeCanvas = () => {
      const containerWidth = canvas.parentElement.clientWidth;
      const containerHeight = canvas.parentElement.clientHeight || 500;

      // Set canvas size with higher resolution for retina displays
      canvas.width = containerWidth * 2;
      canvas.height = containerHeight * 2;
      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${containerHeight}px`;
      ctx.scale(2, 2); // Scale for retina displays

      // Regenerate the graph when canvas is resized
      generateGraph();
    };

    // Generate a causal graph
    const generateGraph = () => {
      nodes = [];

      const canvasWidth = canvas.width / 2; // Adjust for the scale
      const canvasHeight = canvas.height / 2;

      // Create root node in the center
      rootNode = new Node(canvasWidth / 2, canvasHeight / 2, 12, true, true);
      nodes.push(rootNode);

      // Create level 1 nodes connected to root
      const level1Count = 5;
      const level1Nodes = [];

      for (let i = 0; i < level1Count; i++) {
        const angle = (i / level1Count) * Math.PI * 2;
        const distance = 80 + Math.random() * 40;
        const x = rootNode.x + Math.cos(angle) * distance;
        const y = rootNode.y + Math.sin(angle) * distance;

        const node = new Node(x, y, 8);
        level1Nodes.push(node);
        nodes.push(node);

        // Connect to root
        rootNode.addConnection(node);
      }

      // Create level 2 nodes connected to level 1
      for (let i = 0; i < level1Nodes.length; i++) {
        const level1Node = level1Nodes[i];
        const childCount = 1 + Math.floor(Math.random() * 3);

        for (let j = 0; j < childCount; j++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = 60 + Math.random() * 30;
          const x = level1Node.x + Math.cos(angle) * distance;
          const y = level1Node.y + Math.sin(angle) * distance;

          const node = new Node(x, y, 6);
          nodes.push(node);

          // Connect to parent
          level1Node.addConnection(node);

          // Occasionally create connections between siblings
          if (Math.random() > 0.7 && j > 0) {
            const siblingIndex = Math.floor(Math.random() * j);
            const siblingNode = nodes[nodes.length - j + siblingIndex - 1];
            node.addConnection(siblingNode);
          }
        }
      }

      // Select a path to highlight as part of the animation
      highlightedPath = selectPathToHighlight();
    };

    // Select a path from leaf nodes back to root to highlight
    const selectPathToHighlight = () => {
      // Find a leaf node
      const leafNodes = nodes.filter(node => node.connections.length === 0);

      if (leafNodes.length === 0) return [];

      const startNode = leafNodes[Math.floor(Math.random() * leafNodes.length)];
      let currentNode = startNode;
      const path = [currentNode];

      // Find nodes that connect to the current node
      while (currentNode !== rootNode) {
        let found = false;

        for (const node of nodes) {
          if (node.connections.includes(currentNode)) {
            currentNode = node;
            path.push(currentNode);
            found = true;
            break;
          }
        }

        if (!found) break; // No path to root
      }

      return path;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);

      // Update and draw all nodes
      nodes.forEach(node => {
        node.update(canvas.width / 2, canvas.height / 2);

        // Reset highlight
        node.isHighlighted = node === rootNode;
      });

      // Update animation progress
      animationProgress += 0.005;
      if (animationProgress > 1) {
        animationProgress = 0;
        highlightedPath = selectPathToHighlight();
      }

      // Highlight nodes in the path based on animation progress
      const highlightIndex = Math.floor(animationProgress * highlightedPath.length);
      for (let i = 0; i <= highlightIndex && i < highlightedPath.length; i++) {
        highlightedPath[i].isHighlighted = true;
      }

      // Draw all connections and nodes
      nodes.forEach(node => node.draw(ctx));

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener('resize', resizeCanvas);

    // Initialize
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="causal-graph-container">
      <canvas ref={canvasRef} className="causal-graph-canvas" />
      {/* <div className="graph-overlay">
        <div className="root-cause-label">Root Cause</div>
      </div> */}
    </div>
  );
};

export default CausalGraphAnimation;