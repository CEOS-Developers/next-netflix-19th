import { NextRequest, NextResponse } from 'next/server';
import { fetchAllCategories } from '../utils/movieAPI';



export async function GET(request: NextRequest) {
  try {
    const movies = await fetchAllCategories();
    return new NextResponse(JSON.stringify(movies), {
    
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
    return new NextResponse(
      JSON.stringify({
        message: `Failed to fetch data from TMDB.`,
        error: (error as Error).message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}

