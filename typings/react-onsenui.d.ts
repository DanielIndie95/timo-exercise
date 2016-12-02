/* tslint:disable */

declare module "react-onsenui" {
	import * as React from "react"

	export interface OnsenRoute<T> {
		component: React.Component<T, {}>,
		props: T
	}

	export interface PageProps extends React.HTMLProps<Page> {
		renderToolbar?: () => JSX.Element | boolean;
		onShow?: () => void
	}

	export class Page extends React.Component<PageProps, {}> {
	}

	export interface ButtonProps extends React.HTMLProps<Button> {
		disabled?: boolean;
		ripple?: boolean;
	}

	export class Button extends React.Component<ButtonProps, {}> {
	}

	export interface NavigatorProps {
		renderPage: (route: any, navigator: Navigator) => JSX.Element;
		initialRouteStack?: any[];
		initialRoute?: any;
		onPrePush?: () => void;
		onPostPush?: () => void;
		onPrePop?: () => void;
		onPostPop?: () => void;
		animation?: "slide" | "lift" | "fade" | "none";
		animationOptions?: string;
	}

	export class Navigator extends React.Component<NavigatorProps, {}> {
		pushPage(Route: any): void;
		resetPage(Route: any): void;
		popPage(): void;
	}

	export interface ToolbarProps {
	}

	export class Toolbar extends React.Component<ToolbarProps, {}> {
	}

	export interface ToolbarButtonProps extends React.HTMLProps<BackButton> {
	}

	export class ToolbarButton extends React.Component<ToolbarButtonProps, {}> {
	}

	export interface BackButtonProps extends React.HTMLProps<BackButton> {
	}
	export class BackButton extends React.Component<BackButtonProps, {}> {
	}

	export interface ListProps {
		modifier?: string;
		dataSource: any[];
		renderRow: (rowData: any) => JSX.Element;
		renderHeader?: () => JSX.Element;
		renderFooter?: () => JSX.Element;
	}

	export class List extends React.Component<ListProps, {}> {
	}

	export interface ListItemProps {
		onClick?: () => void;
		tappable: boolean;
	}

	export class ListItem extends React.Component<ListItemProps, {}> {
	}

	export interface IconProps extends React.HTMLProps<Icon> {
		icon: string;
		size: number;
	}

	export class Icon extends React.Component<IconProps, {}> {
	}

	export interface InputProps extends React.HTMLProps<Input> {
		modifier?: string;
		type?: string;
		placeholder: string;
		float?: boolean;
		inputId?: string;
		value?: string;
		disabled?: boolean;
	}

	export class Input extends React.Component<InputProps, {}> {

	}

	export interface CarouselProps {
		onPostChange?;
		index?;
		autoScrollRatio?;
		fullscreen?;
		swipeable?;
		autoScroll?;
		overscrollable?;
	}
	export class Carousel extends React.Component<CarouselProps, {}> { }

	export interface CarouselItemProps extends React.HTMLProps<CarouselItem> {
	}
	export class CarouselItem extends React.Component<CarouselItemProps, {}> { }


	export interface TabProps extends React.HTMLProps<Tab> {
		label: string;
		icon: string;
	}
	export class Tab extends React.Component<TabProps, {}> { }

	export interface TabbarProps extends React.HTMLProps<Tabbar> {
		animation?;
		initialIndex: number;
		renderTabs: () => Object[];
	}
	export class Tabbar extends React.Component<TabbarProps, {}> { }
}
