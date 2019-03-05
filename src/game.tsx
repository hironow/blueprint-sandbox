import React, { createRef } from "react";
import * as PIXI from "pixi.js";

type GameState = {
  loading: boolean;
};

class Game extends React.Component<{}, GameState> {
  private containerRef = createRef<HTMLDivElement>();
  private app: PIXI.Application;

  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(): void {
    const node = this.containerRef.current;
    if (node) {
      const app = new PIXI.Application({
        width: 500,
        height: 300,
        backgroundColor: 0x2c3e50
      });
      const view = app.view;
      node.appendChild(view);

      this.app = app;
      this.loadTexture();
    }
  }

  loadTexture(): void {
    this.app.loader
      .add("bunny", "https://pixijs.io/examples/examples/assets/bunny.png")
      .load(() => this.startUp());
  }

  startUp(): void {
    const bunny = new PIXI.Sprite(this.app.loader.resources.bunny.texture);

    // Center the sprite's anchor point
    bunny.anchor.set(0.5);

    // Move the sprite to the center of the screen
    bunny.x = this.app.renderer.width / 2;
    bunny.y = this.app.renderer.height / 2;

    this.app.stage.addChild(bunny);

    // Listen for animate update
    this.app.ticker.add((delta: number) => {
      // Rotate mr rabbit clockwise
      bunny.rotation += 0.1 * delta;
    });

    // update state
    this.setState({ loading: false });
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <p>{this.state.loading ? "loading..." : "loaded!"}</p>
        <div ref={this.containerRef} />
      </React.Fragment>
    );
  }
}

export default Game;
