import { Fragment, Component } from "nano-jsx";

import "./FriendLink.scss";

interface FriendLinkProps {
  name: string;
  href: string;
  icon: string;
  children?: string;
}

export function FriendLink({ name, href, icon, children }: FriendLinkProps) {
  return (
    <Fragment>
      <a class="friend-link" href={href}>
        <img src={icon} alt={name} />
      </a>
      <div class="friend-card">
        <div>
          <img src={icon} alt={name} />
          <h3>{name}</h3>
        </div>
        <hr />
        <p>{children}</p>
      </div>
    </Fragment>
  );
}

import tippy, { createSingleton } from "tippy.js";

export class FriendLinksCtr extends Component<{ children?: Array<ReturnType<typeof FriendLink>> }> {
  private containerRef: HTMLDivElement | null = null;
  private tippyInstances: ReturnType<typeof tippy> = [];
  private singleton: ReturnType<typeof createSingleton> | null = null;

  private setContainer = (el: HTMLDivElement | null) => {
    this.containerRef = el;
  };

  didMount() {
    this.initTippy();
  }

  didUnmount() {
    if (this.singleton) this.singleton.destroy();
    this.tippyInstances.forEach(inst => inst.destroy());
    this.tippyInstances = [];
  }

  private initTippy() {
    if (!this.containerRef) return;
    const triggers = this.containerRef.querySelectorAll<HTMLElement>(".friend-link");
    if (triggers.length === 0) return;

    const instances = tippy(triggers, {
      content: reference => {
        const card = reference.nextElementSibling as HTMLElement;
        return card;
      },
      allowHTML: true,
    });
    this.tippyInstances = instances;

    this.singleton = createSingleton(instances, {
      interactive: true,
      allowHTML: true,
      placement: "top",
      offset: [0, 15],
      moveTransition: "transform 0.2s ease-out",
      animation: "scale-extreme",
      theme: "auto",
    });
  }

  render() {
    return (
      <div class="friend-links-ctr" ref={this.setContainer}>
        {this.props.children}
      </div>
    );
  }
}
