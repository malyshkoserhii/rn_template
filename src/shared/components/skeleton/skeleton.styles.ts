import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: COLORS.antiFlashWhite,
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 16,
	},
});
