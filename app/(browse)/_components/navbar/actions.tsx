import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ActionProps {
	link: string;
	span: string;
}

export const Actions = ({ link, span }: ActionProps) => {
	return (
		<div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
			<div className="flex items-center gap-x-4">
				<Button
					size="sm"
					variant="ghost"
					className="text-muted-foreground hover:text-primary"
					asChild
				>
					<Link href={link}>
						<span className="hidden lg:block">{span}</span>
					</Link>
				</Button>
			</div>
		</div>
	);
};
