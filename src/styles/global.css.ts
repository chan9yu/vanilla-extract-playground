import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('#app', {
	padding: vars.space.large,
	fontFamily: vars.fonts.body,
	background: vars.colors.background,
	color: vars.colors.text.normal,
	minHeight: '100vh'
});
