import '../css/pagination.css';

export default function Pagination({ currentPage, onPageChange }) {
	const handlePageChange = (page) => {
		onPageChange(page);
	};

	return (
		<div
			className="d-flex justify-content-center pagination-container mt-5"
			style={{
				gap: '10px',
			}}
		>
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				&laquo;
			</button>

			<button
				className={currentPage === 1 ? 'active' : ''}
				onClick={() => handlePageChange(1)}
				disabled={currentPage === 1}
			>
				1
			</button>
			<button
				className={currentPage === 2 ? 'active' : ''}
				onClick={() => handlePageChange(2)}
				disabled={currentPage === 2}
			>
				2
			</button>
			<button
				className={currentPage === 3 ? 'active' : ''}
				onClick={() => handlePageChange(3)}
				disabled={currentPage === 3}
			>
				3
			</button>
			<button
				className={currentPage === 4 ? 'active' : ''}
				onClick={() => handlePageChange(4)}
				disabled={currentPage === 4}
			>
				4
			</button>
			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === 4}
			>
				&raquo;
			</button>
		</div>
	);
}
