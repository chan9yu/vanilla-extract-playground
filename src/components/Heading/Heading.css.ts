import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const root = style({
	fontFamily: vars.fonts.heading,
	marginBottom: vars.space.small,
	color: vars.colors.primary
});
